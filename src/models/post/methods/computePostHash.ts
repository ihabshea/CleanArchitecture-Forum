import { Post } from "../../../types";
import md5 from 'md5';
const computePostHash = async (post: Post): Promise<string> => {
    let {title, content} = post;
    let concatString = `${title}${content}`;
    let hashedString = await md5(concatString);
    return hashedString;
}
export default computePostHash;