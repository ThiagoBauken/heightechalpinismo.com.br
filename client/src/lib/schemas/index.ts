/**
 * Schema.org Centralized Export
 * All schemas for AI discoverability in one place
 */

export * from './faq-schema';
export * from './blog-schema';
export * from './service-schema';
export * from './review-schema';
export * from './breadcrumb-schema';

// Master function to initialize all schemas on a page
export function initializeAllSchemas(options?: {
  faq?: boolean;
  reviews?: boolean;
  breadcrumb?: boolean;
  service?: any;
  blogPost?: any;
}) {
  const {
    faq = false,
    reviews = false,
    breadcrumb = true,
    service,
    blogPost
  } = options || {};

  // Import functions
  import('./faq-schema').then(({ injectFAQSchema }) => {
    if (faq) injectFAQSchema();
  });

  import('./review-schema').then(({ injectReviewSchema }) => {
    if (reviews) injectReviewSchema();
  });

  import('./breadcrumb-schema').then(({ injectBreadcrumbSchema }) => {
    if (breadcrumb) injectBreadcrumbSchema();
  });

  if (service) {
    import('./service-schema').then(({ injectServiceSchema }) => {
      injectServiceSchema(service);
    });
  }

  if (blogPost) {
    import('./blog-schema').then(({ injectBlogPostingSchema }) => {
      injectBlogPostingSchema(blogPost);
    });
  }
}
