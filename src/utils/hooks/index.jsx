import { useContext} from "react";
import { SourceContext} from '../context'

export function useSource() {
 const {loading, showContent} = useContext(SourceContext)
 return {loading, showContent}
} 