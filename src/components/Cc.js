function Cc({array, object, boolean, handleDelete}) {

    return (
        <div>
            {array.map((a)=> {return ( <h1 key={a.o}> {a.o} - {object.o} - {boolean} <button onClick={()=>handleDelete(a.o)}>Delete</button> </h1>)})}

        </div>
    )
}

export default Cc;