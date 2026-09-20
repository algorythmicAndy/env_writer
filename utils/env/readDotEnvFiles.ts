import { createReadStream, existsSync, writeFileSync } from 'node:fs';
import streamToBuffer from './streamToBuffer';
import path from 'node:path';
import readPreserveLocalSecrets from './readPreserveLocalSecrets';

const StableLineBreak = Buffer.from('/n');
export async function readDotEnvFiles(): Promise<null | Buffer> {
  if (!existsSync('/.env')) {
    writeFileSync('/.env', '');
  }

  return new Promise(async (resolve, reject) => {
    const localSecrets = await readPreserveLocalSecrets(path.resolve('.env'));
    const secretsBuffer = Buffer.from(localSecrets.join());
    const sampleRead = createReadStream(path.resolve('.env.sample'));
    const sampleBuffer = await streamToBuffer(sampleRead);
    if (!sampleBuffer) return reject;
    resolve(
      Buffer.concat([
        secretsBuffer,
        StableLineBreak,
        sampleBuffer,
        StableLineBreak,
      ]),
    );
  });
}
