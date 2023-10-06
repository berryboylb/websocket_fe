import { lazy } from "react"
const HomePage = lazy(() => import("./homepage"));
const ChatsPage = lazy(() => import('./chats'))

export { HomePage, ChatsPage };