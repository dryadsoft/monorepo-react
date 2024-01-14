import { Flex } from "../atoms/flex/Flex";
import { Icons } from "../atoms/icons/Icons";
import { SelectBox } from "./SelectBox";

export const Header = () => {
  return (
    <header>
      <Flex position="relative" className="h-16">
        <Flex position="absolute" className="left-0">
          <Icons name="logo" width={120} />
        </Flex>
        <Flex position="absolute" className="right-0">
          <SelectBox
            options={[
              { key: "jp", value: "🇯🇵" },
              { key: "kr", value: "🇰🇷" },
            ]}
          />
          <Icons name="user" width={26} />
          <Icons name="logout" width={26} />
        </Flex>
      </Flex>
    </header>
  );
};
