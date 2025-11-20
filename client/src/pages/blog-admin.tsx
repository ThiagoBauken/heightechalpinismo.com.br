import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PlusCircle, Edit, Trash2, Eye, Loader2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[] | null;
  imageUrl: string | null;
  readTime: number;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface PostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string;
  imageUrl: string;
  readTime: number;
  published: boolean;
}

export default function BlogAdmin() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<PostFormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Equipe Heightech",
    category: "seguranca",
    tags: "",
    imageUrl: "",
    readTime: 5,
    published: false,
  });

  // Buscar todos os posts (incluindo não publicados)
  const { data, isLoading } = useQuery({
    queryKey: ['/api/blog/posts?all=true'],
    queryFn: async () => {
      const response = await fetch('/api/blog/posts?all=true');
      if (!response.ok) throw new Error('Erro ao carregar posts');
      const result = await response.json();
      return result.posts as BlogPost[];
    },
  });

  const posts = data || [];

  // Criar novo post
  const createMutation = useMutation({
    mutationFn: async (data: PostFormData) => {
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
          publishedAt: data.published ? new Date().toISOString() : null,
        }),
      });
      if (!response.ok) throw new Error('Erro ao criar post');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts?all=true'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts'] });
      toast({ title: "Post criado com sucesso!" });
      resetForm();
      setIsDialogOpen(false);
    },
    onError: () => {
      toast({ title: "Erro ao criar post", variant: "destructive" });
    },
  });

  // Atualizar post
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<PostFormData> }) => {
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          tags: data.tags ? (typeof data.tags === 'string' ? data.tags.split(',').map(t => t.trim()) : data.tags) : [],
          publishedAt: data.published && !editingPost?.published ? new Date().toISOString() : editingPost?.publishedAt,
        }),
      });
      if (!response.ok) throw new Error('Erro ao atualizar post');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts?all=true'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts'] });
      toast({ title: "Post atualizado com sucesso!" });
      resetForm();
      setIsDialogOpen(false);
      setEditingPost(null);
    },
    onError: () => {
      toast({ title: "Erro ao atualizar post", variant: "destructive" });
    },
  });

  // Deletar post
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erro ao deletar post');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts?all=true'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts'] });
      toast({ title: "Post deletado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao deletar post", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Equipe Heightech",
      category: "seguranca",
      tags: "",
      imageUrl: "",
      readTime: 5,
      published: false,
    });
  };

  const openCreateDialog = () => {
    resetForm();
    setEditingPost(null);
    setIsDialogOpen(true);
  };

  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags ? post.tags.join(', ') : '',
      imageUrl: post.imageUrl || '',
      readTime: post.readTime,
      published: post.published,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja deletar este post?')) {
      deleteMutation.mutate(id);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Administração do Blog
          </h2>
          <p className="text-gray-600 mt-2">
            Gerencie posts, crie novos artigos e publique conteúdo
          </p>
        </div>
        <Button onClick={openCreateDialog} size="lg">
          <PlusCircle className="w-5 h-5 mr-2" />
          Novo Post
        </Button>
      </div>

      {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : posts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600 text-lg mb-4">
                Nenhum post criado ainda
              </p>
              <Button onClick={openCreateDialog}>
                <PlusCircle className="w-5 h-5 mr-2" />
                Criar Primeiro Post
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {post.title}
                        </h3>
                        {post.published ? (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            <Eye className="w-3 h-3 inline mr-1" />
                            Publicado
                          </span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            Rascunho
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Categoria: {post.category}</span>
                        <span>Autor: {post.author}</span>
                        <span>Leitura: {post.readTime} min</span>
                        <span>
                          {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

      {/* Dialog de Criação/Edição */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? 'Editar Post' : 'Novo Post'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Título *</label>
              <Input
                value={formData.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setFormData({
                    ...formData,
                    title,
                    slug: generateSlug(title),
                  });
                }}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Slug (URL) *</label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Resumo *</label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Conteúdo *</label>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Autor *</label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Categoria *</label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seguranca">Segurança</SelectItem>
                    <SelectItem value="normas">Normas</SelectItem>
                    <SelectItem value="casos">Casos de Sucesso</SelectItem>
                    <SelectItem value="manutencao">Manutenção</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Tags (separadas por vírgula)
              </label>
              <Input
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="NR-35, Segurança, Alpinismo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">URL da Imagem</label>
              <Input
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tempo de Leitura (min)</label>
              <Input
                type="number"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })}
                min="1"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="published" className="text-sm font-medium">
                Publicar imediatamente
              </label>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  setEditingPost(null);
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {(createMutation.isPending || updateMutation.isPending) ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {editingPost ? 'Atualizar' : 'Criar'} Post
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
