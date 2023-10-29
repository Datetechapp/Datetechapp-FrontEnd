import css from "./searchMessages.module.css"
import { useState, useRef } from "react"
import { ReactComponent as CloseIcon } from "../../../../assets/Messanger/iconForOnePinnedMessage.svg"
import { ReactComponent as ScrollUp } from "../../../../assets/Messanger/SearchMessages/scrollUpIcon.svg"
import { ReactComponent as ScrollDown } from "../../../../assets/Messanger/SearchMessages/scrollDownIcon.svg"
import { ReactComponent as SearchIcon } from "../../../../assets/Messanger/SearchMessages/searchIcon.svg"
import { ReactComponent as ClearText } from "../../../../assets/Messanger/SearchMessages/clearTextIcon.svg"
import { Input } from "components/common"

interface SearchMessagesProps {
       setShowSearchMessages: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchMessages: React.FC<SearchMessagesProps> = ({ setShowSearchMessages }) => {
       const [searchValue, setSearchValue] = useState("")

       const inputRef = useRef<HTMLInputElement>(null);

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              setSearchValue(newValue);
       }

       const handleClearClick = () => {
              setSearchValue("");
              if (inputRef.current) {
                     inputRef.current.focus();
              }
       };

       return (
              <div className={css.searchMessagesWrapper}>
                     <ScrollUp style={{ cursor: "pointer" }} />
                     <ScrollDown style={{ cursor: "pointer" }} />
                     <div className={css.fieldSearchingBlock}>
                            <SearchIcon className={css.searchingIcon} />
                            <ClearText className={css.clearTextIcon} onClick={handleClearClick} />
                            <Input
                                   inputRef={inputRef}
                                   value={searchValue}
                                   type="text"
                                   placeholder="Search"
                                   className={css.fieldForSearching}
                                   onChange={handleInputChange}
                            />
                     </div>
                     <CloseIcon style={{ cursor: "pointer" }} onClick={() => setShowSearchMessages(false)} />
              </div>
       )
}