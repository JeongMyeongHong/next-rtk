import { IArticle } from "@/types"
import React, { FormEvent, useState } from "react"

type Props = {
    write: (e:FormEvent, formData: any) => void
}

const AddPost: React.FC<Props> = ({write}) => {
    const [formData, setFormData] = useState<IArticle>()
    const handldeForm = (e: FormEvent<HTMLInputElement>): void =>{
        setFormData(formData)
    }

    return(
        <form onSubmit={(e)=>write(e, formData)}>
        <h1>AddPost</h1>
        <input type="text" name="title">제목</input>
        <input type="text" name="content">내용</input>
        <button > 등록 </button>
        </form>
    )
}

export default AddPost