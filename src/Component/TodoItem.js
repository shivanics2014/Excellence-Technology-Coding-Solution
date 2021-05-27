export const TodoItem = ({item}) => {
    return <div style={{display:'flex', flexDirection:'column', padding:10, border:'1px solid black'}}>
        <p style={{fontSize: 16, fontWeight:'bold'}}>{item}</p>
    </div>
}