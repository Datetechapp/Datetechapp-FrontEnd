import "./search.css"
import sourche from '../../../assets/Support/Loupe.svg'

interface SearchType {
    activeValue?: string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
}

export const SearchElem  = ({activeValue, onChange, className}:SearchType) =>{
    return(
        <div className={`Search ${className}`}>
            <img src={sourche} alt={sourche}/>
            <input value={activeValue} placeholder="Search" onChange={onChange}/>
        </div>
    )
}