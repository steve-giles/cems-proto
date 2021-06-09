export interface FilterData {
  id: number;
  name: string;
  description: string;
  isViewableByCorpAdmin: boolean;
  isEditableByCorpAdmin: boolean;
  companyId: number;
  curricula: any[];
  filters: any[];
}
