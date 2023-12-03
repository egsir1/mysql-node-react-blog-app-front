import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Singlex = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          tempore possimus quasi rerum nulla ea similique fuga placeat aliquid
          ipsum.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ea
          dolores voluptatum quaerat aliquid aliquam quod sunt dolore omnis
          blanditiis dolorum labore nam exercitationem, modi iure totam aperiam
          libero quos harum ipsum fuga qui, ullam autem soluta? Cupiditate neque
          amet explicabo commodi autem hic sint quis nam accusamus, ullam ipsum
          praesentium veniam fugiat rem ut illo cumque repellendus quos
          perferendis. Dignissimos aut, quasi sequi corrupti repudiandae, nobis
          saepe magni exercitationem, sit itaque quae! Deleniti dolor dolore,
          error ut vitae ipsam ab. Reprehenderit quia nesciunt doloribus vitae
          assumenda placeat aliquid, excepturi, aliquam itaque reiciendis
          laudantium vel. Voluptate fuga reprehenderit molestiae excepturi
          possimus magnam non beatae hic, ipsam ut quae eaque illo et sed ipsum
          cum! Sapiente dignissimos, dolorem inventore voluptatum, animi nobis
          praesentium reprehenderit doloremque impedit omnis natus modi ipsam
          hic ea officia fugit eos necessitatibus laborum cum vitae libero, qui
          tempora. Voluptatem obcaecati sit laudantium fuga, et mollitia ab
          laboriosam esse dolorum quae a cum, aliquid accusantium! Molestiae
          optio nihil aut est deleniti nam ducimus voluptates praesentium
          provident iste veritatis quisquam minus assumenda quo alias, harum
          officia recusandae, adipisci tempora non labore odit? A soluta nobis
          voluptate laudantium nam iure recusandae quia quisquam, omnis,
          perspiciatis ducimus, fugiat praesentium numquam culpa.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Singlex;
