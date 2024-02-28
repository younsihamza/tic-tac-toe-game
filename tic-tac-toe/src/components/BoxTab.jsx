export default function BoxTab({children,indexRow,indexCol,handleClickBox,keys})
{
    return <li><button key={keys} disabled={typeof children !== typeof 'x'? false :true} onClick={()=>handleClickBox(indexRow,indexCol)}>{children}</button></li>
}