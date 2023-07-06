import fs from "fs"
import path from "path"

const projectsDirectory = path.join(process.cwd(), 'content/projects')
const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getProjectData(fileName) {
  const filePath = path.join(projectsDirectory, fileName + '.md')
  return fs.readFileSync(filePath, 'utf8')
}
export function getAllProjects() {
  const postFiles = fs.readdirSync(projectsDirectory)
  return postFiles.map((post) => post.replace(/\.md$/, ''))
}

export function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName + '.md')
  return fs.readFileSync(filePath, 'utf8')
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory)
  return postFiles.map((post) => post.replace(/\.md$/, ''))
}