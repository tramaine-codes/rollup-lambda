import { format } from 'date-fns';
import oracledb from 'oracledb';

export const handler = () => {
  // eslint-disable-next-line no-console
  console.log(format(new Date(), 'yyyy-MM-dd'));

  // eslint-disable-next-line no-console
  console.log(oracledb.DB_TYPE_OBJECT);
};
