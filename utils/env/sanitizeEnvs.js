import { readDotEnvFiles } from './readDotEnvFiles';
import writeLocalDotEnvFile from './writeLocalDotEnvFile';

async function sanitizeEnvs() {
  const writeBuffer = await readDotEnvFiles();
  if (!writeBuffer) return;
  writeLocalDotEnvFile(writeBuffer);
}

sanitizeEnvs();
