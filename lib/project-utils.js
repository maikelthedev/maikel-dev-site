import fs from "fs"
import path from "path"

const projectsDirectory = path.join(process.cwd(), 'markdown')

export function getPostData(fileName) {
  const filePath = path.join(projectsDirectory, fileName + '.md')
  return fs.readFileSync(filePath, 'utf8')
}
function getAllPosts() {
  const postFiles = fs.readdirSync(projectsDirectory)
}