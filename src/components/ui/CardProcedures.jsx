function CardProcedures({ procedures, description }) {
  return (

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-primary dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://placehold.co/600x400" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h3 class="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary dark:text-white">{procedures}</h3>
        </a>
        <p class="mb-3 font-normal text-primary dark:text-gray-400 text-[10px] md:text-xs lg:text-base">{description}</p>
        
    </div>
</div>

  );
}

export default CardProcedures;