import { format as formatDate } from 'date-fns';

export const filters = {
  formatDate(date: Date | string, format: string) {
    const d = date instanceof Date ? date : new Date(date);
    return formatDate(d, format);
  },
};
