import Hero from "./Hero";
import Info from "./Info";
import Container from "./Container";
import InfoReverse from "./InfoReverse";
import Features from "./Features";
import Team from "./Team";
import Form from "./Form";
import Footer from "./Footer";
function Body() {
  return (
    <div className="body">
      <Hero />
      <Info
        title="Nice scooters, right?"
        text="Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui mi, imperdiet id placerat quis, fringilla et neque. Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus consectetur tortor at mauris vulputate finibus."
      />
      <Container
        title="Some boring text, 
        good for SEO"
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec"
        p2="Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui mi, imperdiet id placerat quis, fringilla et n eque. Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus consectetur tortor at mauris vulputate finibus."
        buttonText="DO SOMETHING"
      />
      <InfoReverse
        title="Still nice, right?"
        text="Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor."
      />
      <Features />
      <Container
        title={
          <div>
            Some boring text,
            <br />
            also good for SEO
          </div>
        }
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec"
        buttonText="DO IT"
      />
      <Team />
      <Form />
      <Footer />
    </div>
  );
}

export default Body;
