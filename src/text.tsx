import React, { useMemo } from "react";
import { Text, TextProps, Dimensions, TextStyle } from "react-native";

import type { FC, PropsWithChildren } from "react";

type variant = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

enum SIZES {
  "xxs" = 8,
  "xs" = 12,
  "sm" = 14,
  "md" = 16,
  "lg" = 18,
  "xl" = 24,
  "xxl" = 32,
  "xxxl" = 48,
}

type AppTextProps = TextProps &
  Pick<TextStyle, "fontWeight"> & {
    fontFamily?: "MoiraiOne-Regular" | "NotoSerifMakasar-Regular";
    variant?: variant;
  };

const { fontScale } = Dimensions.get("window");

const AppText: FC<PropsWithChildren<AppTextProps>> = ({
  children,
  style,
  fontFamily = "NotoSerifMakasar-Regular",
  variant = "sm",
  fontWeight = "400",
  ...rest
}) => {
  const styles: TextStyle = useMemo(
    () => ({
      fontFamily,
      fontWeight,
      fontSize: SIZES[variant] * fontScale,
    }),
    []
  );

  return (
    <Text {...rest} style={[style, styles]}>
      {children}
    </Text>
  );
};

export default AppText;
