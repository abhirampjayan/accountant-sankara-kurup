export interface CustomButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outlined' | 'default';
}
