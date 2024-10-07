ig.ENTITY.Player.inject({
  handleStateStart(a, b) {
	  if(a.startState == 3){ //melee
		if(sc.model.player.name == "triblader2"
			|| sc.model.player.name == "triblader3"
			|| sc.model.player.name == "triblader4"
			|| sc.model.player.name == "triblader5"
			|| sc.model.player.name == "triblader-lea"
			|| sc.model.player.name == "Schneider"
			|| sc.model.player.name == "Luke"
			){
				if(this.attackCounter==0) //skip the first swing, to make the combo be 3 steps
					this.attackCounter=1;
			}
	  }
      return this.parent(a, b);
  },
});

//make ice disks ignore the 2 followups from charge shots. NO_ICEDISK is a custom property applied to all elements of followup shots
sc.IceDiskEntity.inject({
	ballHit(a){
		if(a && a.attackInfo && a.attackInfo.hints && a.attackInfo.hints.includes("NO_ICEDISK"))
		{
			return false; //make the ball pass through it (as if it went under, which it would've if it was like 1 frame slower)
		}
		else
			return this.parent(a);
	}
});
//same for ferrofluid balls, NO_FERRO is another custom property
sc.FerroEntity.inject({
	ballHit(a){
		if(a && a.attackInfo && a.attackInfo.hints && a.attackInfo.hints.includes("NO_FERRO"))
		{
			return true; //make the ball collide with it but otherwise do nothing
		}
		else
			return this.parent(a);
	}
});
