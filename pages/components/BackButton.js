import { useRouter } from "next/router";
import { Button } from "./button";

export const BackButton=()=>{
    const router = useRouter();
    return(
        <Button alia-label="戻る" onClick={()=>router.push('/')}> ホームに戻る</Button>
    )
}
