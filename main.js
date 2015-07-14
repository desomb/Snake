function	main()
{
    var struc2;
    
    struc = my_struc();
    mlj_init("RUSH by desomb_v & drack_q");
    struc.win = mlj_new_window(800, 800, "black");
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
    mlj_key_hook(gere_key, struc);
}

function	my_struc(struc)
{
    var	struc = {};

    struc.x = 0;
    struc.y = 0;
    struc.x1 = 400;
    struc.y1 = 400;
    struc.win = 0;
    struc.i = 0;
    struc.tab = my_map();
    struc.a = 9;
    struc.b = 9;
    struc.cpt = 0;
    struc.cpt2 = 0;
    struc.speed = 200;
    struc.mrand = Math.floor((Math.random() * 19) + 1);
    struc.mrand2 = Math.floor((Math.random() * 19) + 1);
    struc.mrand3 = Math.floor((Math.random() * 4) + 1);
    return (struc);
}
