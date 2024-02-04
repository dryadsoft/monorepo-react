import { Li } from "../atoms/li/Li";
import { Ul } from "../atoms/ul/Ul";

interface UlListProps {
  list: { text: string; isSelected?: boolean }[];
}
export const UlList = ({ list }: UlListProps) => {
  return (
    <Ul>
      {list.map((li) => (
        <Li isSelected={li.isSelected}>{li.text}</Li>
      ))}
    </Ul>
  );
};
