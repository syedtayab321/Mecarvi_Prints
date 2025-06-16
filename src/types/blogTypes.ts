export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  postCount: number;
  status: "Active" | "Draft" | "Archived";
}

export interface BlogPost {
  id: number;
  featuredImage: string;
  title: string;
  slug: string;
  views: number;
  category: string;
  status: "Published" | "Draft" | "Scheduled";
  publishedDate: string;
}

export interface AddNewBlogCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  register: any;
  errors: any;
}

export interface AddBlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  register: any;
  errors: any;
  categories: Array<{ id: string; name: string }>;
}