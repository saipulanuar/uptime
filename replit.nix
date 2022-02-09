{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
      	pkgs.ffmpeg
      	pkgs.imagemagick
	      pkgs.git
    ];
}