import { processImage } from '../utils/imageProcessor.js';
import fs from 'fs';

describe('processImage', () => {
  it('creates a resized image', async () => {
    const output = await processImage('encenadaport', 200, 200);
    expect(fs.existsSync(output)).toBeTrue();
  });
});
