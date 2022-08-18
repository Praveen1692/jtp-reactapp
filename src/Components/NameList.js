export const NameList=()=>{
    const name=["Hello","Welcome","Sir"];
    return (
        <div>
            {
                name.map((name)=>{
                    return <h2 key={name}>{name}</h2>
                })
            }
        </div>
    )

}