function        my_inter_left(params)
{
    params.tab[params.a][params.b] = 3;
    params.b = params.b - 1;
    if (params.tab[params.a][params.b] == 1 || 
	params.tab[params.a][params.b] == 3)
    {
	my_loose(params);
        return;
    }
    if (params.tab[params.a][params.b] == 6 
	|| params.tab[params.a][params.b] == 7 
	|| params.tab[params.a][params.b] == 8 
	|| params.tab[params.a][params.b] == 9)
    	my_bonus(params);
    if (params.tab[params.a][params.b] == 5)
        my_win(params);
    params.tab[params.a][params.b] = 2;
    my_snake(params.win, params.tab, params.i, params);
    params.cpt++;
    params.cpt2++;
}

function        my_inter_right(params)
{
    params.tab[params.a][params.b] = 3;
    params.b = params.b + 1;
    if (params.tab[params.a][params.b] == 1 
	|| params.tab[params.a][params.b] == 3)
    {
	my_loose(params);
        return;
    }
    if (params.tab[params.a][params.b] == 6 
	|| params.tab[params.a][params.b] == 7 
	|| params.tab[params.a][params.b] == 8 
	|| params.tab[params.a][params.b] == 9)        
	my_bonus(params);
    if (params.tab[params.a][params.b] == 5)
        my_win(params);
    params.tab[params.a][params.b] = 2;
    my_snake(params.win, params.tab, params.i, params);
    params.cpt++;
    params.cpt2++;
}

function        my_inter_up(params)
{
    params.tab[params.a][params.b] = 3;
    params.a = params.a - 1;
    if (params.tab[params.a][params.b] == 1 
	|| params.tab[params.a][params.b] == 3)
    {
	my_loose(params);
        return;
    }
    if (params.tab[params.a][params.b] == 6 
	|| params.tab[params.a][params.b] == 7 
	|| params.tab[params.a][params.b] == 8 
	|| params.tab[params.a][params.b] == 9)
    	my_bonus(params);	
    if (params.tab[params.a][params.b] == 5)
        my_win(params);
    params.tab[params.a][params.b] = 2;
    my_snake(params.win, params.tab, params.i, params);
    params.cpt++;
    params.cpt2++;
}

function        my_inter_down(params)
{
    params.tab[params.a][params.b] = 3;
    params.a = params.a + 1;
    if (params.tab[params.a][params.b] == 1 
	|| params.tab[params.a][params.b] == 3)
    {
	my_loose(params);
	return;
    }
    if (params.tab[params.a][params.b] == 6 
	|| params.tab[params.a][params.b] == 7 
	|| params.tab[params.a][params.b] == 8 
	|| params.tab[params.a][params.b] == 9)        
    	my_bonus(params);
    if (params.tab[params.a][params.b] == 5)
        my_win(params);
    params.tab[params.a][params.b] = 2;
    my_snake(params.win, params.tab, params.i, params);
    params.cpt++;
    params.cpt2++;
}

function        gere_key(key, params)
{
    if (key == keyCode.LEFT)
    {
        clearInterval(params.i);
        params.i = setInterval(my_inter_left, params.speed, params);
    }
    if (key == keyCode.RIGHT)
    {
        clearInterval(params.i);
        params.i = setInterval(my_inter_right, params.speed, params);
    }
    if (key == keyCode.UP)
    {
        clearInterval(params.i);
        params.i = setInterval(my_inter_up, params.speed, params);
    }
    if (key == keyCode.DOWN)
    {
        clearInterval(params.i);
        params.i = setInterval(my_inter_down, params.speed, params);
    }
    if (params.cpt >= 200)
        my_timer_bonus(params);
    if (params.cpt2 >= 40)
    {
        my_bonus_appear(params);
        params.mrand3 = Math.floor((Math.random() * 4) + 1);
    }
}
