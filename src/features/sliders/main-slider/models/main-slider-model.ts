export interface ISliderItem {
    title: string;
    description: string;
    index: number;
    imgSrc: string;
  }

export const mockData: ISliderItem[] = [
    {
      title: '1',
      index: 0,
      description: 'sdfsfsdf',
      imgSrc: '/photos/1.jpg'
    },
    {
      title: '2',
      index: 1,
      description: 'sssssddd',
      imgSrc: '/photos/2.jpg'
    },
    {
      title: '3',
      index: 2,
      description: 'fgffgfgfg',
      imgSrc: '/photos/3.jpg'
    },
    {
      title: '4',
      index: 3,
      description: 'sasassss',
      imgSrc: '/photos/4.jpg'
    }
  ]