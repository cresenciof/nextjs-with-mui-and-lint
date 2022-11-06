import { Box, BoxProps } from '@mui/material';
import type { FC, ReactNode } from 'react';

export type CardProps = {
  elevation?: number;
  sx?: BoxProps['sx'];
  children?: ReactNode;
  renderActions?: () => ReactNode;
};

const Card: FC<CardProps> = ({ children, elevation, sx, renderActions }) => {
  const { width, maxWidth, ...rest } = (sx || {}) as any;
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: elevation,
        width,
        maxWidth,
      }}
    >
      <Box
        sx={{
          ...rest,
        }}
      >
        {children}
      </Box>
      {renderActions?.()}
    </Box>
  );
};

export default Card;
