interface Props{
    value: number;
}

const Ball = ({value}:Props) => {
    return(
        <div className="ball">
            <p>{value}</p>
        </div>
    )
}

export default Ball;