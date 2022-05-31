import { IArticle } from "@/types"
import React from "react"

type Props = {
    article: IArticle
    deletePost: (id: number) => void
}

const Article: React.FC<Props> = ({deletePost, article}) => {
    return(
        <>
        <h1>Article</h1>
        <h1>글번호: {article.artId}</h1>
        <h1>제목: {article.title}</h1>
        <h1>내용: {article.content}</h1>
        <button onClick={()=>deletePost(article.artId)}>삭제</button>
        </>
    )
}

export default Article