import { Flex } from "../atoms/flex/Flex";
import { UlList } from "../molecules/UlList";

export const Nav = () => {
  return (
    <nav className="sticky top-0">
      <Flex className="space-x-2 bg-[#eadec2] text-xs text-gray-700 sm:flex-col sm:space-x-0 sm:space-y-4 sm:bg-transparent sm:py-10 sm:text-sm">
        sdfsdf
      </Flex>
      <UlList
        list={[{ text: "menu1" }, { text: "menu2" }, { text: "menu3" }]}
      />
    </nav>
  );
};
