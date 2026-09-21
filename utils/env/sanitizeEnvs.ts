import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { readDotEnvFiles } from './readDotEnvFiles';
import writeLocalDotEnvFile from './writeLocalDotEnvFile';

async function sanitizeEnvs() {
  const writeBuffer = await readDotEnvFiles();
  if (!writeBuffer) return;
  writeLocalDotEnvFile(writeBuffer);
}

sanitizeEnvs();
