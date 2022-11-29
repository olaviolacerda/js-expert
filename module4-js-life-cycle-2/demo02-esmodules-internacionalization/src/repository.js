import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
  // nao tem __filename, __dirname
  const { pathname: databaseFile } = new URL('./../database.json', import.meta.url);
  let pathNormalized = databaseFile.replace(/%20/gi, ' ')

  if (process.platform === 'win32') {
    pathNormalized = pathNormalized.substring(3, pathNormalized.length)
  }

  const currentData = JSON.parse(await readFile(pathNormalized))
  currentData.push(data)

  await writeFile(pathNormalized, JSON.stringify(currentData))
}