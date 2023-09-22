function Cc(params) {

    return (
        <div>
            {params.att.map((b)=>(<h1 key={b.o}>{b.o}</h1>))}
        </div>
    )
}

export default Cc;