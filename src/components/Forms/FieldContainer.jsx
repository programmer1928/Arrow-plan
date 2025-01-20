import React, { PureComponent } from 'react';
import StartTime from './StartTime';
import Work from './Work';
import Rest from './Rest';
import Container from '../Container';

class FieldContainer extends PureComponent {
  render() {
    const { isDataExist } = this.props;

    return (
      <>
        {
          !isDataExist ? 
            <StartTime /> :
            <Container>
              <section className='grid md:grid-cols-2 gap-5 text-lg text-myWhite '>
                <Work />
                <Rest />
              </section>
            </Container>
        }
      </>
    );
  }
}

export default FieldContainer;
