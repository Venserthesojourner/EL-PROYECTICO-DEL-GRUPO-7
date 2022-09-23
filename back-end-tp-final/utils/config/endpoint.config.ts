import { registerAs } from '@nestjs/config';

export default registerAs('endPointConfig', () => {
  return {};
});
