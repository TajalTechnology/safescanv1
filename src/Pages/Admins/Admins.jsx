import React from "react";
import BreadCrumb from "../../Components/Shared/BreadCrumb";

const Admins = () => {
  return (
    <>
      <BreadCrumb
        title={"Dashboard"}
        links={[
          { title: "Home", url: "/admin/dashboard" },
          { title: "Dashboard", url: "/admin/dashboard" },
        ]}
      />
      <div className=" ">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          temporibus delectus cumque rem praesentium sequi nam quisquam ipsa
          magni eos odit sint esse illo placeat dolor cupiditate animi sunt
          consequuntur ullam perferendis tenetur, incidunt ex? Consectetur,
          provident nemo repudiandae modi illo explicabo qui cum sapiente ipsam
          perspiciatis, vitae quod commodi quidem voluptas dolorum magnam fuga
          velit? Blanditiis rem laborum vero. Commodi, ad aut laudantium
          consequatur assumenda nostrum ex earum dolore excepturi dignissimos
          consequuntur vero, aliquam suscipit sed deserunt doloribus cum
          voluptas? Eum obcaecati esse explicabo. Iure quae aperiam porro
          laudantium, officia consequatur inventore aliquid voluptates
          dignissimos ipsa voluptatum quo soluta, dicta magnam tempore facere
          atque rerum provident laboriosam nostrum nesciunt perspiciatis odio
          delectus! Obcaecati, ipsa reprehenderit! Illo impedit animi laborum at
          repellat dolores assumenda sunt eligendi, reprehenderit dolorum
          voluptate. Iure ipsum totam nemo eius, esse, nisi atque eligendi velit
          quos dicta suscipit sit facere explicabo! Cupiditate, at porro fugit
          aut nesciunt tenetur aperiam veniam, reiciendis minus, harum
          consequuntur. Expedita quos odio porro quia illum saepe maiores. Quia
          dolores vel in alias illo enim optio molestias ab obcaecati animi
          repellat perferendis praesentium tenetur necessitatibus eveniet omnis,
          officia doloremque nulla? Nihil nam esse repudiandae velit, cum
          tempora iure omnis suscipit quae error.
        </h2>
      </div>
    </>
  );
};

export default Admins;
