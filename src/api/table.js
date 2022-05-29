import { basePost } from '@/libs/request'

export const getTableData = data => basePost('/getTableData', data);
