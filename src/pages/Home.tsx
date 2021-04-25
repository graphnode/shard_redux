/* eslint-disable max-len */
import styled from 'styled-components';

import Counter from '../components/Counter';
import Feed from '../components/Feed';

const StyledPage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 15rem);
  grid-template-rows: repeat(15, 10rem);
  gap: 1rem;

  padding: 2rem;
`;

const StyledBox = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;

  color: #42444F;
`;

const HomePage : React.FC = () => {
  return (
    <StyledPage>
      <StyledBox>
        <Counter type="Mass" value="1000" change="+100" />
      </StyledBox>
      <StyledBox>
        <Counter type="Energy" value="3000" change="+100" />
      </StyledBox>
      <StyledBox>
        <Counter type="Resources" value="1000" change="+100" />
      </StyledBox>
      <StyledBox>
        <Counter type="Emojis" value="∞" />
      </StyledBox>
      <StyledBox style={{ gridColumn: '5 / 7', gridRow: '1 / 6', overflow: 'hidden' }}>
        <Feed style={{ height: '100%' }} messages={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit velit eu est luctus, in semper risus eleifend. Cras laoreet venenatis velit id tempus. Fusce maximus ipsum mollis imperdiet consequat. Nulla facilisi. Proin a dui congue, sodales justo at, luctus nisi. Duis volutpat blandit urna a efficitur. Integer ac sollicitudin quam, eu accumsan magna. Sed vitae vehicula nisi. Mauris a augue congue, sollicitudin ex vitae, accumsan sapien. Aenean feugiat commodo tellus, non finibus dui posuere in. Fusce dignissim pellentesque pharetra. Maecenas vel rhoncus felis, vel luctus odio. Vestibulum feugiat odio risus, non commodo metus maximus accumsan.',
          'Duis porta sit amet sem a rutrum. Proin eleifend a nisi eget varius. Duis suscipit non nunc et molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce venenatis suscipit nibh, non vestibulum tellus. Vestibulum egestas sapien at magna aliquet, eget fermentum lectus blandit. Suspendisse eros augue, pretium eu mauris at, blandit aliquet nunc. Sed lobortis at augue vel pretium. Ut pellentesque tortor ante, non blandit erat maximus luctus. In consectetur aliquam leo, sit amet bibendum nisi volutpat quis. Morbi finibus est at mauris viverra dictum. Phasellus sit amet ex eget est accumsan ultricies. Aliquam velit metus, ultricies vel nisl id, vehicula semper metus. Nunc finibus lorem diam, id condimentum tellus sollicitudin nec.',
          'Nulla eu viverra tortor. Ut bibendum metus arcu, ac consectetur orci sollicitudin laoreet. Phasellus sagittis tempor lectus. Integer tincidunt, magna et condimentum tincidunt, nisi purus molestie tellus, consequat eleifend eros tellus sit amet tortor. Ut posuere, nulla in tincidunt pulvinar, lorem ante dignissim dui, eget dapibus erat eros id dolor. Duis nec risus ut enim ultricies mattis. Vestibulum vehicula pulvinar lacus, vitae ultrices lectus vulputate non. Mauris id lorem vestibulum, tempor nibh vitae, pulvinar lorem. Sed ultrices leo leo, ac cursus est tempor ut. Vestibulum viverra in sapien ut iaculis. Vivamus ac venenatis velit.',
          'Phasellus molestie elementum leo, in consequat enim gravida at. Sed sit amet mollis quam. Pellentesque ligula justo, malesuada in mi id, sagittis tincidunt massa. Curabitur pellentesque condimentum nulla, et pulvinar justo commodo at. Aenean sollicitudin, tellus sit amet convallis imperdiet, felis lorem fermentum nibh, non pulvinar sapien est sit amet velit. Morbi sem turpis, consequat non porttitor vel, dapibus eu lorem. Fusce tincidunt euismod urna, non condimentum quam fermentum vitae. Aliquam a erat congue, posuere urna vitae, cursus tortor. Phasellus interdum varius nisi vitae euismod. Suspendisse aliquet orci nec neque tempor ornare. Pellentesque et sapien odio. Fusce non accumsan mauris, quis vulputate ligula. Pellentesque massa lacus, aliquet vel sollicitudin ac, porttitor nec leo. Ut non pharetra dui. Sed volutpat nisl nec metus aliquet blandit.',
          'Morbi non porta nisl. Morbi ac viverra nibh, eget lacinia tellus. Nullam eget iaculis metus, in pretium mauris. Integer in efficitur orci. Donec ac dictum metus, ut euismod neque. Phasellus placerat eget nunc sit amet suscipit. Curabitur nec tempus dolor. Aenean nisi ex, iaculis vel lorem sed, efficitur lacinia elit. In auctor ante quam, non consectetur purus varius in. Proin mollis pretium porttitor. Aenean tempor feugiat elit ut consectetur. Suspendisse potenti. Aliquam blandit a justo vel efficitur.',
        ]} />
      </StyledBox>

    </StyledPage>
  );
};

export default HomePage;
