import { Modal, useMantineTheme } from "@mantine/core";
import PostShare打卡分享 from "../postShare/PostShare打卡分享";

function ShareModal分享模態({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <PostShare打卡分享/>
    </Modal>
  );
}

export default ShareModal分享模態;