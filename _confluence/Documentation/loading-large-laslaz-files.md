# Loading large Las/Laz Files

Hello !

Thank you for your patience while we investigated the issue.

We identified that the root cause lies in a limitation of the [http://loaders.gl](http://loaders.gl) package, which is used by our SDK and xeokit-converter to load LAS/LAZ files. Currently, the package supports files up to **160MB**, whereas the file you are trying to load exceeds **200MB**. Unfortunately, this limit cannot be increased at this time.

However, we do have a workaround to offer:  
You can use **lasmerge**, an open-source tool provided by LASTools, to split the large LAS/LAZ file into smaller files. Once split, these smaller files can be loaded or converted individually using our SDK or xeokit-converter.

To assist you further, I’ve included the following resources:

1. **Link to LASTools:** [https://github.com/LAStools/LAStools/tree/master](https://github.com/LAStools/LAStools/tree/master)
2. **Instruction for lasmerge:** [https://downloads.rapidlasso.de/html/lasmerge\_README.html](https://downloads.rapidlasso.de/html/lasmerge_README.html)
3. **Example code to load smaller files individually using the SDK.**
4. **A sample set of smaller files split using lasmerge for reference.**

If you need any help implementing this workaround or have further questions, feel free to reach out.

Best,  
Muhammad Ijlal