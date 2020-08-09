export interface Project {
  title: string;
  year: number;
  path: string;
  text: string;
  id: string;
}

export const Projects: Project[] = [
  {
    title: 'Avatar2i',
    year: 2018,
    path: 'assets/images/avatar2i.jpg',
    text: '',
    id: 'avatar2i'
  },
  {
    title: 'AR App',
    year: 2018,
    path: 'assets/images/ar_app.jpg',
    text: '',
    id: 'ar-app'
  },
  {
    title: 'AR Grasses',
    year: 2018,
    path: 'assets/images/ar_grasses.jpg',
    text: '',
    id: 'ar-grasses'
  },
  {
    title: 'SF GUI',
    year: 2017,
    path: 'assets/images/sf_gui.jpg',
    text: '',
    id: 'sf-gui'
  },
  {
    title: 'Lunchbox',
    year: 2017,
    path: 'assets/images/lunchbox.jpg',
    text: '',
    id: 'lunchbox'
  }
]
