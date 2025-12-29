export interface Project {
  id: number;
  name: string;
  status: 'active' | 'on hold' | 'completed';
  deadline: string;
  assigned_team_member: string;
  budget: number;
  created_at?: string;
  updated_at?: string;
}

export interface ProjectFormData {
  name: string;
  status: 'active' | 'on hold' | 'completed';
  deadline: string;
  assigned_team_member: string;
  budget: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
  error?: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T;
  pagination: PaginationMeta;
}

export interface ProjectCounts {
  all: number;
  active: number;
  'on hold': number;
  completed: number;
}

