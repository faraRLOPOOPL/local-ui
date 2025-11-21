/**
 * Curated icon set from Phosphor Icons
 * Only these icons are available in @local-ui design system
 *
 * Usage:
 * import { ArrowRight, MagnifyingGlass } from '@local-ui/design-system/icons';
 */

// Re-export only whitelisted icons from Phosphor
export {
  // Arrows & Navigation
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  CaretRight,
  CaretLeft,
  CaretUp,
  CaretDown,
  CaretDoubleRight,
  CaretDoubleLeft,

  // Common Actions
  MagnifyingGlass,
  X,
  Plus,
  Minus,
  Check,
  Warning,
  Info,
  Question,

  // Interface
  DotsThree,
  DotsThreeVertical,
  DotsThreeOutline,
  DotsThreeOutlineVertical,
  List,
  Gear,
  Bell,
  Calendar,
  Clock,
  Eye,
  EyeSlash,

  // User & Account
  User,
  UserCircle,
  Users,
  SignIn,
  SignOut,

  // Files & Documents
  File,
  FileText,
  Folder,
  FolderOpen,
  Download,
  Upload,
  Paperclip,

  // Communication
  Envelope,
  EnvelopeOpen,
  ChatCircle,
  Phone,

  // Media
  Image,
  Camera,
  Play,
  Pause,

  // Edit
  Pencil,
  PencilSimple,
  Trash,
  Copy,

  // Navigation
  House,
  MapPin,
  Compass,

} from '@phosphor-icons/react';

// Export types for convenience
export type { Icon, IconProps, IconWeight } from '@phosphor-icons/react';
