import { writeFile } from 'node:fs/promises';
import path from 'node:path';

export default async function writeLocalDotEnvFile(
  buffer: Buffer,
): Promise<void> {
  await writeFile(path.resolve('.env'), buffer);
}
