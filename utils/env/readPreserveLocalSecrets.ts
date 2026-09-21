import { createReadStream } from 'node:fs';
import readLine from 'node:readline';

export default async function readPreserveLocalSecrets(path: string) {
  const reader = readLine.createInterface({
    input: createReadStream(path, { encoding: 'utf8' }),
    crlfDelay: Infinity,
  });
  const secrets: string[] = [];
  for await (const line of reader) {
    if (line.startsWith('SECRET_')) secrets.push(line);
  }

  return secrets;
}
